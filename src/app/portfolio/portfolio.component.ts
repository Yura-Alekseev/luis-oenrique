import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios = [
    {link: 'javascript:;', src: '../../assets/img/hello.png', alt: 'hello'},
    {link: 'javascript:;', src: '../../assets/img/wanaka.png', alt: 'wanaka'},
    {link: 'javascript:;', src: '../../assets/img/perfomance.png', alt: 'perfomance'},
    {link: 'javascript:;', src: '../../assets/img/your-music.png', alt: 'your-music'},
    {link: 'javascript:;', src: '../../assets/img/build.png', alt: 'build'},
    {link: 'javascript:;', src: '../../assets/img/make.png', alt: 'make'},
    {link: 'javascript:;', src: '../../assets/img/hello.png', alt: 'hello'},
    {link: 'javascript:;', src: '../../assets/img/wanaka.png', alt: 'wanaka'},
    {link: 'javascript:;', src: '../../assets/img/perfomance.png', alt: 'perfomance'},
    {link: 'javascript:;', src: '../../assets/img/your-music.png', alt: 'your-music'},
    {link: 'javascript:;', src: '../../assets/img/build.png', alt: 'build'},
    {link: 'javascript:;', src: '../../assets/img/make.png', alt: 'make'},
    {link: 'javascript:;', src: '../../assets/img/hello.png', alt: 'hello'},
    {link: 'javascript:;', src: '../../assets/img/wanaka.png', alt: 'wanaka'},
    {link: 'javascript:;', src: '../../assets/img/perfomance.png', alt: 'perfomance'},
    {link: 'javascript:;', src: '../../assets/img/your-music.png', alt: 'your-music'},
    {link: 'javascript:;', src: '../../assets/img/build.png', alt: 'build'},
    {link: 'javascript:;', src: '../../assets/img/make.png', alt: 'make'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  showMore() {
  }
}
