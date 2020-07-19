import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JAVASCRIPT } from "../../data/javascript.data";
import { ASPNET } from "../../data/aspnet.data";
import { CSHARP } from "../../data/csharp.data";
import { DESIGNPATTERNS } from "../../data/designPatterns.data";
@Injectable()
export class QuizService {
  constructor(private http: HttpClient) {}

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
    return [
      { id: "javascript", name: "JavaScript", desc:"", limitTemps:"30 min", moyDeb:0,moyConf:0,moyExp:0 },
      { id: "aspnet", name: "Asp.Net", desc:"", limitTemps:"30 min", moyDeb:0,moyConf:0,moyExp:0 },
      { id: "csharp", name: "C Sharp", desc:"", limitTemps:"30 min", moyDeb:0,moyConf:0,moyExp:0 },
      { id: "designPatterns", name: "Design Patterns", desc:"", limitTemps:"30 min", moyDeb:0,moyConf:0,moyExp:0 }
    ];
  }
}
