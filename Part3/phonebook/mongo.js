
const mongoose = require('mongoose')

const password = process.argv[2]
const dbname = `phonebook_db`
const url = `mongodb+srv://cdwyer1bod:${password}@cluster0.cfaix.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const Person = mongoose.model('Person', new mongoose.Schema({
  name: String,
  number: String
}))

if (process.argv.length == 5) {
  // then we should add new user...
  const name = process.argv[3]
  const number = process.argv[4]
  const person = new Person({
    name: name,
    number: number,
  })

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  // list people in the database
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}
