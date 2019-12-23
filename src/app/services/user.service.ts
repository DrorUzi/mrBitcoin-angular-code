import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor() { }
  
 getUser() {
  var user = JSON.parse(localStorage.getItem('user'))
  if (user) return user
  else {
      var  user :any = {
          name: "Dror Uzi",
          coins: 100,
          moves: [{
              to: {
                  id: "5a5664029a8dd82a6178b15f",
                  name: "Roy Cantu"
              },
              at: 1576999121932,
              amount: 20
          }]
      }
      localStorage.setItem('user', JSON.stringify(user))
      return user
  }
}
addMove(contact, amount) {
  var user = JSON.parse(localStorage.getItem('user'))
  if (user) {
      user.coins -= amount;
      user.moves.unshift({
          to: {
              id: contact._id,
              name: contact.name
          },
          at: Date.now(),
          amount
      })
      localStorage.setItem('user', JSON.stringify(user))
      return user
  }
}
}
