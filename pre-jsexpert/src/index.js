// const EntityBase = require('./entityBase')

// console.log(new EntityBase({
//     name: 'Itallo',
//     gender: 'male',
// }).name)

const assert = require('assert')
const Employee = require('./employee')

const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({
        name: 'Leticia',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, { message: 'you must define age first!'})
}

{
    const employee = new Employee({
        name: 'Joaozinho',
        age: 20,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, 'Mr. Joaozinho')
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, 0)

}

