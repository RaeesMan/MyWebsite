import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    gallery=
    [
      {'id':1,'name':'Nissan skyline gtr R34 ','description':'The Nissan Skyline GT-R (Japanese: 日産・スカイラインGT-R, Nissan Sukairain GT-R) is a sports car based on the Nissan Skyline range. The first cars named "Skyline GT-R" were produced between 1969 and 1972 under the model code KPGC10, and were successful in Japanese touring car racing events. This model was followed by a brief production run of second-generation cars, under model code KPGC110, in 1973.Skylines are available in either coupé, or sedan body styles ','image':'../../assets/gtrr34.jpg'},
      {'id':2,'name':'Mazda RX7','description':'The Mazda RX-7 is a front/mid-engine, rear-wheel-drive, rotary engine-powered sports car that was manufactured and marketed by Mazda from 1978 to 2002 across three generations, all of which made use of a compact, lightweight Wankel rotary engine.The first generation of the RX-7, SA, was a two-seater 2 door hatchback coupé. It featured a 12A carbureted rotary engine as well as the option for a 13B with electronic fuel injection in later years.','image':'../../assets/mazdarx7.jpg'},
      {'id':3,'name':'Nissan 350z','description':'The Nissan 350Z is a two-door, two-seater sports car that was manufactured by Nissan Motor Corporation from 2002 to 2009 and marks the fifth generation of Nissans Z-car line. The 350Z entered production in 2002 and was sold and marketed as a 2003 model from August 2002.Nissan unveiled the 240Z concept car at the 1999 North American International Auto Show, then later at the Los Angeles Auto Expo. The concept was based primarily on a design sketch by Manny Baker .','image':'../../assets/nissan350z.jpg'},
      {'id':4,'name':'Supra mk4','description':'The Toyota Supra (Japanese: トヨタ・スープラ, Toyota Sūpura) is a sports car and grand tourer manufactured by Toyota Motor Corporation beginning in 1978. The name "supra" is derived from the Latin prefix, meaning "above", "to surpass" or "go beyond".The initial four generations of the Supra were produced from 1978 to 2002. The fifth generation has been produced since March 2019 and went on sale in May 2019.The styling of the original Supra was derived from the Toyota Celica','image':'../../assets/supramk4.jpg'},

    ]
}
