import { Comment } from 'src/app/models/comment';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  comments: FormGroup;
  idComment= 0;
  action = 'add';
  loading = false;
  comment: Comment;

  constructor( private FormBuilder: FormBuilder, 
    private  route: ActivatedRoute, 
    private commentService: CommentService,
    private router: Router
    ) {
    this.comments = this.FormBuilder.group({
      title:['',Validators.required],
      createdBy:['',Validators.required],
      text:['',Validators.required],
    });

    if(+this.route.snapshot.paramMap.get('id')>0){
      this.idComment =+this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.update();
  }

  saveComment(){
    if(this.action === 'add') {
    const comment: Comment = {
        title: this.comments.get('title').value,
        text: this.comments.get('text').value,
        createdBy: this.comments.get('createdBy').value,
        dateCreated: new Date(),
      };
      this.commentService.saveComment(comment).subscribe((response)=>{
        this.router.navigate(['/']);
      });

    }else{
      const comment: Comment = {
        id: this.comment.id,
        title: this.comments.get('title').value,
        text: this.comments.get('text').value,
        createdBy: this.comments.get('createdBy').value,
        dateCreated: new Date(),
      };
      this.commentService.updateComment(this.idComment,comment).subscribe((response)=>{
        this.router.navigate(['/']);
      });

    }
    
  }
  update(){
    if(this.idComment > 0){
      this.action = "Update";
      this.commentService.loadComment(this.idComment).subscribe((response)=>{
        this.comment = response;

        this.comments.patchValue({
          title: response.title,
          createdBy: response.createdBy,
          text: response.text
        });
      });
        
    }
     
  }

}
