import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
      path: 'posts',
      component: PostComponent,
      title: 'Posts'
    },
    {
      path: 'posts/details/:id',
      component: PostDetailsComponent,
      title: 'Post Details'
    }
  ];
  
  export default routeConfig;