import { Injectable } from '@angular/core'

import { Item } from './item'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: 'Hugo Lloris', position: 'Goalkeeper', height: 1.88, nationality: 'French', dob: '26/12/1986', appearances: 32, goals: 0, assists: 0  },
    { id: 3, name: 'Oliver Skipp', position: 'Midfielder', height: 1.75, nationality: 'English', dob: '16/09//2000', appearances: 12, goals: 1, assists: 1 },
    { id: 4, name: 'Dejan Kulusevski', position: 'Midfielder/Winger', height: 1.86, nationality: 'Swedish', dob:  '25/04/2000', appearances: 33, goals: 5, assists: 3},
    { id: 5, name: 'Pierre-Emile Højbjerg', position: 'Midfielder', height: 1.87, nationality: 'Danish', dob: '05/08/1995', appearances: 36, goals: 2, assists: 5},
    { id: 6, name: 'Pedro Porro', position: 'Right Back', height: 1.73, nationality: 'Spanish', dob: '13/09/1999', appearances: 8, goals: 1, assists: 0 },
    { id: 7, name: 'Davinson Sánchez', position: 'Defender', height: 1.87, nationality: 'Columbian', dob: '12/06/1996', appearances: 16, goals: 0, assists: 1 },
    { id: 8, name: 'Japhet Tanganga', position: 'Defender', height: 1.84, nationality: 'English', dob: '31/03/1999', appearances: 5, goals: 0, assists: 0 },
    { id: 9, name: 'Son Heung-min', position: 'Forward', height: 1.83, nationality: 'South Korean', dob: '08/07/1992', appearances: 33, goals: 11, assists: 13 },
    { id: 10, name: 'Lucas Moura', position: 'Forward', height: 1.72, nationality: 'Brazilian', dob: '13/08/1992', appearances: 12, goals: 3, assists: 2 },
    { id: 11, name: 'Richarlison', position: 'Forward', height: 1.84, nationality: 'Brazilian', dob: '10/05/1997', appearances: 14, goals: 6, assists: 0 },
    { id: 12, name: 'Pape Matar Sarr', position: 'Midfielder', height: 1.85, nationality: 'Senegalese', dob: '14/09/2002', appearances: 0, goals: 0, assists: 0 },
    { id: 13, name: 'Harry Kane', position: 'Forward', height: 1.88, nationality: 'English', dob: '28/07/1993', appearances: 38, goals: 22, assists: 13 },
    { id: 14, name: 'Rodrigo Bentancur', position: 'Midfield', height: 1.87, nationality: 'Uruguayian', dob: '25/06/1997', appearances: 26, goals: 3, assists: 4 },
    { id: 17, name: 'Emerson Royal', position: 'Right Back/Wing Back', height: 1.81, nationality: 'Brazilian', dob: '14/01/1999', appearances: 19, goals: 1, assists: 4 },
    { id: 18, name: 'Ben Davies', position: 'Defender', height: 1.81, nationality: 'Walsh', dob: '24/04/1993', appearances: 35, goals: 5, assists: 3 },
    { id: 19, name: 'Ivan Perišić', position: 'Winger', height: 1.86, nationality: 'Croatian', dob: '02/02/1989', appearances: 32, goals: 7, assists: 11 },
    { id: 20, name: 'Clément Lenglet', position: 'Defender', height: 1.86, nationality: 'French', dob: '17/06/1995', appearances: 21, goals: 1, assists: 2 },
    { id: 21, name: 'Eric Dier', position: 'Defender/Defensive Midfielder', height: 1.88, nationality: 'English', dob: '15/01/1994', appearances: 35, goals: 3, assists: 0 },
    { id: 22, name: 'Yves Bissouma', position: 'Midfielder', height: 1.82, nationality: 'Ivorian', dob: '30/08/1986', appearances: 11, goals: 0, assists: 0 },
    { id: 23, name: 'Arnaut Danjuma', position: 'Winger', height: 1.78, nationality: 'Nigerian', dob: '31/01/1997', appearances: 0, goals: 0, assists: 0 },
    { id: 24, name: 'Brandon Austin', position: 'Goalkeeper', height: 1.88, nationality: 'English', dob: '08/01/1999', appearances: 0, goals: 0, assists: 0 },
    { id: 25, name: 'Fraser Forster', position: 'Goalkeeper', height: 2.01, nationality: 'English', dob: '17/03/1988', appearances: 5, goals: 0, assists: 0 },
    { id: 26, name: 'Cristian Romero', position: 'Centre Back', height: 1.85, nationality: 'Argentine', dob: '27/04/1998', appearances: 28, goals: 3, assists: 0 },
    { id: 27, name: 'Alfie Whiteman', position: 'Goalkeeper', height: 1.89, nationality: 'English', dob: '02/08/1998', appearances: 0, goals: 0, assists: 0 },
    { id: 28, name: 'Ryan Sessegnon', position: 'Left Back/Left Midfield', height: 1.78, nationality: 'English', dob: '18/05/2000', appearances: 5, goals: 0, assists: 0 }
  )

  getItems(): Array<Item> {
    return this.items
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0]
  }
}
