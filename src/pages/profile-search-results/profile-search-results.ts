import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';

/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  
  username:string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private github: GithubServiceProvider) {
  }

  getUserInformation():void
  {
    this.github.mockGetUserInformation(this.username).subscribe(data => alert(data));
  }

  ionViewDidLoad()
  {
    this.username=this.navParams.get('username');
    if(this.username)
    {
      this.getUserInformation();
    }
  }

}
