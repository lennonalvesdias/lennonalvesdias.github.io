import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../shared/services/feed-service.service';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {

  private mediumUrl: string = 'https%3A%2F%2Fmedium.com%2Ffeed%2F%40lennonalvesdias';
  public feeds: any;

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.mediumUrl)
      .subscribe(
        feed => this.feeds = feed.items.filter((item: any, index: number) => index <= 2),
        error => console.log(error));
  }

}
