import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
})
export class WordsComponent implements OnInit {
  filterStatus = "All words";
  newEn = '';
  newVn = '';
  isShowForm = false;

  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true },
  ];
  constructor() {}

  ngOnInit(): void {}

  addWord(){
    this.arrWords.unshift({
        id : this.arrWords.length + 1,
        en: this.newEn,
        vn: this.newVn,
        memorized: false
    });
    this.newEn = '';
    this.newVn = '';
    this.isShowForm = false;
  }

  removeWord(id: number){
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
  }

  getShowStatus(memorized: boolean){
    const viewAll = this.filterStatus === 'All words';
    const viewMemorizedword = this.filterStatus === 'Memorized words' && memorized;
    const viewNotMemorizedWord = this.filterStatus === 'Not Memorized words' && !memorized;
    return viewAll || viewMemorizedword || viewNotMemorizedWord;
  }
}
