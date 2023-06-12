import { Injectable } from '@angular/core'

import { Item } from './item'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: 'Hugo Lloris', role: 'Goalkeeper', height: 1.88, nationality: 'French', dob: '26/12/1986'  },
    { id: 3, name: 'Oliver Skipp', role: 'Midfielder', height: 1.75, nationality: 'English', dob: '16/09//2000' },
    { id: 4, name: 'Dejan Kulusevski', role: 'Midfielder/Winger', height: 1.86, nationality: 'Sweden', dob:  '25/04/2000'},
    { id: 5, name: 'Pierre-Emile Højbjerg', role: 'Midfielder', height: 1.87, nationality: 'Denmark', dob: '05/08/1995' },
    { id: 6, name: 'Pedro Porro', role: 'Right Back', height: 1.73, nationality: 'Spanish', dob: '13/09/1999' },
    { id: 7, name: 'Davinson Sánchez', role: 'Defender', height: 1.87, nationality: 'Columbian', dob: '12/06/1996' },
    { id: 8, name: 'Japhet Tanganga', role: 'Defender', height: 1.84, nationality: 'English', dob: '31/03/1999' },
    { id: 9, name: 'Son Heung-min', role: 'Forward', height: 1.83, nationality: 'South Korean', dob: '08/07/1992' },
    { id: 10, name: 'Lucas Moura', role: 'Forward', height: 1.72, nationality: 'Brazilian', dob: '13/08/1992' },
    { id: 11, name: 'Richarlison', role: 'Forward', height: 1.84, nationality: 'Brazilian', dob: '10/05/1997' },
    { id: 12, name: 'Pape Matar Sarr', role: 'Midfielder', height: 1.85, nationality: 'Senegal', dob: '14/09/2002' },
    { id: 13, name: 'Harry Kane', role: 'Forward', height: 1.88, nationality: 'English', dob: '28/07/1993' },
    { id: 14, name: 'Mascherano', role: 'Defender' },
    { id: 17, name: 'Paco Alcácer', role: 'Forward' },
    { id: 18, name: 'Jordi Alba', role: 'Defender' },
    { id: 19, name: 'Digne', role: 'Defender' },
    { id: 20, name: 'Sergi Roberto', role: 'Midfielder' },
    { id: 21, name: 'André Gomes', role: 'Midfielder' },
    { id: 22, name: 'Aleix Vidal', role: 'Midfielder' },
    { id: 23, name: 'Umtiti', role: 'Defender' },
    { id: 24, name: 'Mathieu', role: 'Defender' },
    { id: 25, name: 'Fraser Forster', role: 'Goalkeeper', height: 2.01, nationality: 'English', dob: '17/03/1988' }
  )

  getItems(): Array<Item> {
    return this.items
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0]
  }
}
