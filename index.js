// Your code here
function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(array){
let records = array.map(obj=> createEmployeeRecord(obj))
return records
}

let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),date
    })

    return employee
}
let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}
let hoursWorkedOnDate = function(employee, Date){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === Date
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === Date
    })
    let timeElapsed = outEvent.hour - inEvent.hour;
    return timeElapsed / 100
}
