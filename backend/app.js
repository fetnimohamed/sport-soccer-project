//* Import Express Module from node Module
const express = require('express');
//* Create express application
const app = express();
//* import bcyrpt
const path = require('path');
const multer = require('multer');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
  // *destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});
//!import body parser


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//!import mongoose
const mongoose = require('mongoose');
//!conection to DB
mongoose.connect('mongodb://localhost:27017/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Match = require('./models/match');
const Team = require("./models/team")
const Player = require('./models/player');
const User = require('./models/user');
const player = require('./models/player');
const {
  RESOURCE_CACHE_PROVIDER
} = require('@angular/platform-browser-dynamic');
const team = require('./models/team');
//todo security config
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
//* get all matches 
app.get('/allMatches', (req, res) => {
  console.log('Here In BE');

  Match.find((err, documents) => {
    if (err) {
      console.log('error concting to DB');
    } else {
      res.status(200).json({
        message: 'ok !!',
        matches: documents
      });
    }
  });
});
//*get allpalyers
app.get('/allPlayers', (req, res) => {

  console.log('Here In players');

  Player.find((err, documents) => {
    if (err) {
      console.log('error concting to DB');
    } else {
      res.status(200).json({
        message: 'ok !!',
        players: documents
      });
    }
  });
});
//*addmatch
app.post('/addMatches', (req, res) => {
  console.log('add match', req.body);
  const match = new Match({
    equipeOne: req.body.equipeOne,
    equipeTwo: req.body.equipeTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo
  })
  match.save().then(
    res.status(200).json({
      message: 'done!!'
    })
  );
});
//*delete match
app.delete('/deleteMatch/:id', (req, res) => {
  console.log("deleting", req.params.id);
  Match.deleteOne({
    _id: req.params.id
  }).then(
    res.status(200).json({
      message: 'deleted ok'
    })
  )
})
//* get all users
app.get('/getUsers', (req, res) => {
  console.log('Here In ps');
  User.find((err, documents) => {
    if (err) {
      console.log("eeeee");
    } else {
      res.status(200).json({
        message: 'got all Users',
        users: documents
      });
    }
  })
});
//*add user
app.post('/addUser', multer({
  storage: storage
}).single('avatar'), (req, res) => {
  console.log('rrr', req.body);
  console.log('file', req.file);
  url = req.protocol + '://' + req.get('host');
  bcrypt.hash(req.body.pwd, 10).then(cPwd => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: cPwd,
      tel: req.body.tel,
      role: req.body.role,
      avatar: url + '/images/' + req.file.filename
    })
    console.log(user);
    user.save(err => {

      if (err) {
        if (err._message === 'User validation failed') {
          res.status(200).json({
            message: err._message
          })
        } else {
          res.status(201).json({
            message: 'rrrrrr'
          })
        }
      }
    })
  })
})
//*get user by id 
app.get('/getuser/:id', (req, res) => {
  User.findOne({
    _id: req.params.id
  }).then(
    document => {
      if (!document) {
        // 404, 401
        //*401 unautharized
        //*can't find the requested resource
        res.status(404).json({
          message: 'Unautharized'
        })
      } else {
        res.status(200).json({
          user: document
        })
      }
    }
  )
});
//*delete player
app.delete('/deletePlayer/:id', (req, res) => {
  console.log(req.params.id);
  Player.deleteOne({
    _id: req.params.id
  }).then(
    res.status(200).json({
      message: 'player delete!!!!'
    })
  )
});
//*get player by id 
app.get('/getPlayer/:id', (req, res) => {
  Player.findOne({
    _id: req.params.id
  }).then(
    document => {
      if (document) {
        res.status(200).json({
          player: document
        })
      } else {
        res.status(404).json({
          message: "unautharized"
        })
      }
    }
  )
})
//*add player
app.post('/addPlayer', multer({
  storage: storage
}).single('image'), (req, res) => {
  console.log('file', req.file);
  url = req.protocol + '://' + req.get('host');
  const player = new Player({

    name: req.body.name,
    position: req.body.position,
    description: req.body.description,
    birthday: req.body.birthday,
    teamId: req.body.teamId,
    image: url + '/images/' + req.file.filename
  })
  console.log(player);
  player.save().then(
    res.status(200).json({
      message: 'done!!!'
    })
  );
})
//*edit player
app.put('/editPlayer/:id', (req, res) => {
  Player.updateOne({
    _id: req.params.id
  }, {

    name: req.body.name,
    position: req.body.position,
    description: req.body.description,
    birthday: req.body.birthday,
    teamId: req.body.teamId
  }).then(
    res.status(200).json({
      message: 'updated!!'
    })
  )
})
//* login 
app.post('/login', (req, res) => {
  console.log('here in login ', req.body);
  User.findOne({
    email: req.body.email
  }).then(data => {
    console.log("data", data);
    if (!data) {
      res.status(401).json({
        message: 'not found'
      })
    }
    return bcrypt.compare(req.body.pwd, data.pwd)
  }).then(result => {
    if (!result) {
      res.status(401).json({
        message: 'Authentification failed'
      })
    }
    User.findOne({
      email: req.body.email
    }).then(findedUser => {
      const userToSend = {
        role: findedUser.role,
        firstName: findedUser.firstName,
        lastName: findedUser.lastName,
        avatar: findedUser.avatar
      }
      console.log(userToSend);
      res.status(200).json({
        message: 'ok',
        user: userToSend
      })
    })

  })
})
//*delete user
app.delete('/delete/:id', (req, res) => {
  console.log('User deleted', req.params.id)
  User.deleteOne({
    _id: req.params.id
  }).then(
    res.status(200).json({
      message: 'user deleted !!'
    })
  )
})
//* add team
app.post('/addTeam', (req, res) => {
  const team = new Team({
    name: req.body.name,
    country: req.body.country
  })
  team.save().then(
    res.status(201).json({
      message: 'team add!'
    })

  )
})
//* get all teams
app.get('/allTeams', (req, res) => {
  Team.find((err, documents) => {
    if (!err) {
      res.status(200).json({
        message: "teams founded!!",
        teams: documents
      })
    } else {
      message;
      'no team founded !!'
    }
  })
})
// *Export la var app
module.exports = app;
