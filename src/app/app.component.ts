import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'angularProject';

 // For Child to parent data passing explanation
 parentFunction(data)
 {
   console.warn(data)
 }
/////////////////////////////////
   name = "Indra Kumar Pathak";

   user = {
     name : "Indra Kumar Pathak",
     age : 27 ,
     Education : "M-Tech"
   }

  usersArray = [
    {
      name : "Indra Kumar Pathak",
      age : 27 ,
      Education : "M-Tech"
    },
    {
      name : "Kumar Pathak",
      age : 23 ,
      Education : "M-Tech"
    },
    {
      name : "Indra  Pathak",
      age : 26 ,
      Education : "M.Sc."
    }
  ]
   show =false;
  // getName()
  // {
  //   return "Indra Testing Interpollation";
  // }
  // Obj = {
  //   name : "Kellay",
  //   age : 41
  // }
  //  arr = ["Indra","Krati","Indra and krati"]
  //  siteUrl = window.location.href
   
  //  ///// For testing function call by making button 
   getUserName()
   {
     alert("Indra Kumar Pathak");
   }
// For testing the various events
   myEvent(evt)
   {
     console.warn(evt);
   }

// For getting the value of a text box in console and also for getting in html 
  currentVal ="";
 getValue(val)
 {
   this.currentVal = val ;
   console.warn(val);
 }
////////Array for For Loop//////////////
// We geerally write array value in single quotes 
data = [
{
  name : 'Indra',
  age : '27'
},
{
  name : 'Krati',
  age : '26'
},
{
  name : 'Indra & Krati',
  age : '54'
}
]

getValues(value)
{
  console.warn(value);
}


 }
//  String Interpolation is a one-way databinding technique which is used to output the data from a TypeScript code to HTML template (view). It uses the template expression in double curly braces to display the data from the component to the view. String interpolation adds the value of a property from the component.  By using Interpollation we can access the typescript code to HTML {% endcomment %}

//  Interpollation example is above name ,getName function ,obj ,arr and siteurl these all things can be accesed as {{name}} or {{getName}} in app.component.html   