const router = require('express').Router()
const sequelize = require('../config/connection')
const { Expense_Form, User } = require('../models')


router.get('/', (req, res) => {
 res.render('homepage', {loggedIn: req.session.loggedIn})
})

router.get('/login', (req,res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login')
})

router.get('/tracker', (req, res) => {
  res.render('expense-tracker')
})

router.get('/calc', (req, res) => {
  res.render('calculator')
})


router.get('/about', (req, res) => {
  cardList = [];
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Mark Carriveau", title: "Jr. Developer", abouttext: "Aspiring Junior Developer", github: "https://github.com/mjbc53", email: "mjbc53@gmail.com"});
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Tom Cole", title: "Some Title", abouttext: "about tom", github: "tom github", email: "tom@tom.tom" });
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Inmar Luna", title: "Some Title", abouttext: "about inmar", github: "inmar github", email: "inmar@inmar.inmar" });
  cardList.push({ imgsrc: "images/ben.jpg", contributor: "Ben Vue", title: "Full Stack Student", abouttext: "Ben is Ben", github: "benyvue", email: "bvue012@gmail.com" });
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Collin Whalen", title: "Some Title", abouttext: "about collin", github: "collin github", email: "collin@collin.collin" });
  res.render('about', {cardList: cardList });
})



module.exports = router
