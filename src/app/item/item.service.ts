import { Injectable } from '@angular/core'

import { Item } from './item'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: 'Hugo Lloris', role: 'Goalkeeper', height: 1.88, nationality: 'French', dob: '26/12/1986'  },
    { id: 3, name: 'Oliver Skipp', role: 'Midfielder', height: 1.75, nationality: 'English', dob: '16/09//2000' },
    { id: 4, name: 'Dejan Kulusevski', role: 'Midfielder/Winger', height: 1.86, nationality: 'Swedish', dob:  '25/04/2000'},
    { id: 5, name: 'Pierre-Emile Højbjerg', role: 'Midfielder', height: 1.87, nationality: 'Denish', dob: '05/08/1995' },
    { id: 6, name: 'Pedro Porro', role: 'Right Back', height: 1.73, nationality: 'Spanish', dob: '13/09/1999' },
    { id: 7, name: 'Davinson Sánchez', role: 'Defender', height: 1.87, nationality: 'Columbian', dob: '12/06/1996' },
    { id: 8, name: 'Japhet Tanganga', role: 'Defender', height: 1.84, nationality: 'English', dob: '31/03/1999' },
    { id: 9, name: 'Son Heung-min', role: 'Forward', height: 1.83, nationality: 'South Korean', dob: '08/07/1992' },
    { id: 10, name: 'Lucas Moura', role: 'Forward', height: 1.72, nationality: 'Brazilian', dob: '13/08/1992' },
    { id: 11, name: 'Richarlison', role: 'Forward', height: 1.84, nationality: 'Brazilian', dob: '10/05/1997' },
    { id: 12, name: 'Pape Matar Sarr', role: 'Midfielder', height: 1.85, nationality: 'Senegalese', dob: '14/09/2002' },
    { id: 13, name: 'Harry Kane', role: 'Forward', height: 1.88, nationality: 'English', dob: '28/07/1993' },
    { id: 14, name: 'Rodrigo Bentancur', role: 'Midfield', height: 1.87, nationality: 'Uruguayian', dob: '25/06/1997' },
    { id: 17, name: 'Emerson Royal', role: 'Right Back/Wing Back', height: 1.81, nationality: 'Brazilian', dob: '14/01/1999' },
    { id: 18, name: 'Ben Davies', role: 'Defender', height: 1.81, nationality: 'Walsh', dob: '24/04/1993' },
    { id: 19, name: 'Ivan Perišić', role: 'Winger', height: 1.86, nationality: 'Croatian', dob: '02/02/1989' },
    { id: 20, name: 'Clément Lenglet', role: 'Defender', height: 1.86, nationality: 'French', dob: '17/06/1995' },
    { id: 21, name: 'Eric Dier', role: 'Defender/Defensive Midfielder', height: 1.88, nationality: 'English', dob: '15/01/1994' },
    { id: 22, name: 'Yves Bissouma', role: 'Midfielder', height: 1.82, nationality: 'Ivorian', dob: '30/08/1986' },
    { id: 23, name: 'Arnaut Danjuma', role: 'Winger', height: 1.78, nationality: 'Nigerian', dob: '31/01/1997' },
    { id: 24, name: 'Brandon Austin', role: 'Goalkeeper', height: 1.88, nationality: 'English', dob: '08/01/1999' },
    { id: 25, name: 'Fraser Forster', role: 'Goalkeeper', height: 2.01, nationality: 'English', dob: '17/03/1988' },
    { id: 26, name: 'Cristian Romero', role: 'Centre Back', height: 1.85, nationality: 'Argentine', dob: '27/04/1998' },
    { id: 27, name: 'Alfie Whiteman', role: 'Goalkeeper', height: 1.89, nationality: 'English', dob: '02/08/1998' },
    { id: 28, name: 'Ryan Sessegnon', role: 'Left Back/Left Midfield', height: 1.78, nationality: 'English', dob: '18/05/2000' }
  )

  getItems(): Array<Item> {
    return this.items
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0]
  }
}
