import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FeedService } from "src/app/shared/services/feed-service.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class BlogPostComponent implements OnInit {
  private mediumUrl: string =
    "https%3A%2F%2Fmedium.com%2Ffeed%2F%40lennonalvesdias";
  public feeds: any;
  private sub: any;
  id: number;

  constructor(
    private feedService: FeedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params["id"];
    });
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.mediumUrl).subscribe(
      (feed) => (this.feeds = feed.items),
      (error) => console.log(error)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
