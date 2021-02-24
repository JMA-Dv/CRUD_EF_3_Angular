import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import {Comment} from'src/app/models/comment';

@Component({
  selector: 'app-watch-comments',
  templateUrl: './watch-comments.component.html',
  styleUrls: ['./watch-comments.component.scss']
})
export class WatchCommentsComponent implements OnInit {
  loading = false;
  
  idComment:number;

  comment: Comment;
  constructor(private commentService: CommentService, private route: ActivatedRoute) {
    this.idComment =+this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.loadComment();
    
  }


  loadComment(){
    this.loading = true;
    this.commentService.loadComment(this.idComment).subscribe((response)=>{
      this.loading = false;
      this.comment = response;
    });
  }



}
