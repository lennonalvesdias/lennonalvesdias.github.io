import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogPostComponent } from "./blog/post/post.component";

const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "blog/:id", component: BlogPostComponent },
  { path: "blog", component: BlogComponent },
  { path: "", redirectTo: "profile", pathMatch: "full" },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
