import { Component, OnInit } from "@angular/core";
import { FeedService } from "../shared/services/feed-service.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  private mediumUrl: string =
    "https%3A%2F%2Fmedium.com%2Ffeed%2F%40lennonalvesdias";
  public feeds: any;

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.mediumUrl).subscribe(
      (feed) => (this.feeds = feed.items),
      (error) => console.log(error)
    );
  }
}
