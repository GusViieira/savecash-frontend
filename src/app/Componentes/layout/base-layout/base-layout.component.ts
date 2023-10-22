import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { MainStore } from 'src/app/Store/main-store';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  sidebarVisible = false;
  name = "Virginia"
  lastName = "Fonsceca"
  email = "virginiadocorre@bol.com.br"
  items: MenuItem[] | undefined
  itemsMenu: MenuItem[] | undefined
  routeName: any;
  
constructor(private router: Router, private mainStore: MainStore) {}




  ngOnInit(): void {
    this.mainStore.getRouteName().subscribe(v => {
      this.routeName = v
    })
    
    this.items = [
      {
        label: "Dashboard",
        icon: "pi pi-chart-line",
        routerLink: ""
      },
      {
        label: "Lançamentos",
        icon: "pi pi-calculator",
        routerLink: "lancamentos"
      },
      {
        label: "Envelopes",
        icon: "pi pi-envelope",
        routerLink: "envelopes"
      },
      {
        label: "Metas financeiras",
        icon: "pi pi-check-square",
        routerLink: "metas"
      }
    ]

    this.itemsMenu = [
      {
        label: 'Opções',
        items: [
          {
            label: 'Perfil',
            icon: 'pi pi-user',
            command: () => {
              // this.update();
            }

          }
        ]
      }
    ];
  }

  goRoute(route: string){
    this.router.navigate([route])
    this.sidebarVisible = false
  }
}

