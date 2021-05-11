const age = prompt('Enter your age')
const day = prompt('Enter the day of the week')
if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && (age < 18)) {
  console.log('Time for school!')
} else if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && (age > 18)) {
  console.log('Time to go to work!')
} else if ((day === 'Saturday' || day === 'Sunday') && (age => 18 && age <= 18)) {
  console.log('Time to relax for the weekend!')
}
