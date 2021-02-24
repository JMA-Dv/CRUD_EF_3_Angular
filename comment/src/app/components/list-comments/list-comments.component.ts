import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import {Comment} from'src/app/models/comment';
@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit {
  listComment: Comment[];
  loading = false;
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.loadComment();
  }

  loadComment():void{
    this.loading = true;
    this.commentService.getCommentList().subscribe((data)=>{
      this.loading = false;
      this.listComment = data;
    });
  }
  deleteComment(id: number){
    this.commentService.deleteComment(id).subscribe((response)=>{
      this.loadComment();
      this.loading = false;
    });

  }

}
