import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JAVASCRIPT } from "../../data/javascript.data";
import { ASPNET } from "../../data/aspnet.data";
import { CSHARP } from "../../data/csharp.data";
import { DESIGNPATTERNS } from "../../data/designPatterns.data";
@Injectable()
export class QuizService {

  quizList : any;
  constructor(private http: HttpClient) {
    if (!(localStorage.getItem('quizList') === null))
      this.quizList= JSON.parse(localStorage.getItem('quizList'));
    else {
      this.quizList = [
        { id: "javascript", name: "JavaScript", desc:"Test de connaissance sur JavaScript", limitTemps:"30", moyDeb:0,moyConf:0,moyExp:0 },
        { id: "aspnet", name: "Asp.Net", desc:"Test de connaissance sur ASP.NET", limitTemps:"30", moyDeb:0,moyConf:0,moyExp:0 },
        { id: "csharp", name: "C Sharp", desc:"Test de connaissance sur C#", limitTemps:"30", moyDeb:0,moyConf:0,moyExp:0 },
        { id: "designPatterns", name: "Design Patterns", desc:"Test de connaissance sur les Design Patterns", limitTemps:"30", moyDeb:0,moyConf:0,moyExp:0 }
      ];
      localStorage.setItem('quizList', JSON.stringify(this.quizList));
    }
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
    if (!(localStorage.getItem('quizList') === null))
    {
      console.log("getting it from localstorage",localStorage.getItem('quizList') )
      return JSON.parse(localStorage.getItem('quizList'));
    }
    else
      return this.quizList;
  }

  addQuizz(data) {
    if (!(localStorage.getItem('quizList') === null))
    {
      let tempdata = JSON.parse(localStorage.getItem('quizList'));
      console.log("setting it in localstorage ", tempdata);
      console.log(data);
      console.log(tempdata);
      tempdata.push(data)
      localStorage.setItem('quizList', JSON.stringify(tempdata));
      this.quizList= JSON.parse(localStorage.getItem('quizList'));
      console.log(this.quizList);
    }
    else
    {
      this.quizList.push(data);
      localStorage.setItem('quizList', JSON.stringify(this.quizList));
    }

}
}
