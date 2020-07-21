import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JAVASCRIPT } from "../../data/javascript.data";
import { ASPNET } from "../../data/aspnet.data";
import { CSHARP } from "../../data/csharp.data";
import { DESIGNPATTERNS } from "../../data/designPatterns.data";
@Injectable()
export class QuizService {

  quizList : any= [
    { id: "javascript", name: "JavaScript", desc:"", limitTemps:"30", moyDeb:0,moyConf:0,moyExp:0 },
    { id: "aspnet", name: "Asp.Net", desc:"", limitTemps:"30", moyDeb:0,moyConf:0,moyExp:0 },
    { id: "csharp", name: "C Sharp", desc:"", limitTemps:"30", moyDeb:0,moyConf:0,moyExp:0 },
    { id: "designPatterns", name: "Design Patterns", desc:"", limitTemps:"30", moyDeb:0,moyConf:0,moyExp:0 }
  ];
  constructor(private http: HttpClient) {
    if (localStorage.getItem('quizList') != undefined)
      localStorage.setItem('quizList', JSON.stringify(this.quizList));
  }

  get(type: string): any {
    let data: any;
    switch (type) {
      case "javascript":
        return JAVASCRIPT;
      case "aspnet":
        return ASPNET;
      case "csharp":
        return CSHARP;
      case "designPatterns":
        return DESIGNPATTERNS;
    }
  }

  getAll() {
    if (localStorage.getItem('quizList') != undefined)
       return JSON.parse(localStorage.getItem('quizList'));
    else
      return this.quizList;
  }

  addQuizz(data) {
    let tempdata = JSON.parse(localStorage.getItem('quizList')).push(data);
    localStorage.setItem('quizList', JSON.stringify(tempdata))
    this.quizList.push(data)
}
}
