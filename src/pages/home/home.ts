import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, ToastController } from 'ionic-angular';
import { TodoList, User } from '../../models';
import { TodoListProvider } from '../../providers/todo-list.service';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todoLists$: Observable<TodoList[]>;
  constructor(private navCtrl: NavController, private _TodoListProvider: TodoListProvider, private alertCtrl: AlertController,
    private toastCtrl: ToastController, private _AuthProvider: AuthProvider) {

  }

  ngOnInit() {
    this.checkConnection();
  }


  checkConnection() {
    if (this._AuthProvider.checkConnection()) this.getUserData();
    else this.navCtrl.setRoot('AuthPage');
  }

  getUserData() {
    this._AuthProvider.getUserData().subscribe((user: User) => {
      if (user) this.getList(user);
    })
  }

  getList(user: User) {
    this.todoLists$ = this._TodoListProvider.getTodoList(user);
  }

  addList() {
    let prompt = this.alertCtrl.create({
      title: 'List Name',
      message: "Enter a name for this new list",
      inputs: [
        {
          name: 'name',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => this._TodoListProvider
            .addList(data)
            .then(_ => this.presentToast('List succesfuly added'))
            .catch(err => this.presentToast('Something wrong happened'))

        }
      ]
    });
    prompt.present();
  }

  deleteList(todoList: TodoList) {
    let prompt = this.alertCtrl.create({
      title: 'Delete List',
      message: "Are you sure you want to delete this list?",
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Yes',
          handler: _ => this._TodoListProvider
            .deleteList(todoList)
            .then(_ => this.presentToast('List succesfuly deleted'))
            .catch(err => this.presentToast('Something wrong happened'))
        }
      ]
    });
    prompt.present();
  }

  updateList(todoList: TodoList) {
    let prompt = this.alertCtrl.create({
      title: 'Update List Name',
      message: "Enter the new list name",
      inputs: [
        {
          name: 'name',
          placeholder: 'New Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => this._TodoListProvider
            .updateList(todoList, data.name)
            .then(_ => this.presentToast('List name succesfuly updated'))
            .catch(err => this.presentToast('Something wrong happened'))

        }
      ]
    });
    prompt.present();
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: "text-center",
    });
    toast.present();
  }

  refresh(event) {
    /*this.getList();
    setTimeout(() => {
      event.complete();
    }, 2000);*/
  }

  goToDetails(todoLists) {
    this.navCtrl.push('DetailsPage', { details: todoLists });
  }

  signOut() {
    this._AuthProvider.signOut()
      .then(res => {
        this.navCtrl.setRoot('AuthPage');
      })
      .catch(err => console.log('error:', err));
  }
}
