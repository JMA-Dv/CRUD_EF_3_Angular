import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  shinomiaImg:string = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a87ed35e-c673-4b82-adbf-c136474549cf/de2yop9-b7f606b6-41f7-4ffa-b4cd-b8b4c64d1f6e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTg3ZWQzNWUtYzY3My00YjgyLWFkYmYtYzEzNjQ3NDU0OWNmXC9kZTJ5b3A5LWI3ZjYwNmI2LTQxZjctNGZmYS1iNGNkLWI4YjRjNjRkMWY2ZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.eOAvtlOYDsYLCkM72EdZnc1dBvacE4wWwM5k1rZgN1Q"
  constructor() { }

  ngOnInit(): void {
  }

}
