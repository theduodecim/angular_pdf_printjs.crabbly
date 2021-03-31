import { Component } from '@angular/core';
import print from 'print-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrintjsLib';
  someJSONdata = [
    {
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '111-111-1111'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
    ,
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }

  ];

  printJS() {
    // https://printjs.crabbly.com/
    //HTML PRINT
    print({
      printable: 'myElementId',
      documentTitle: 'PDF',
      repeatTableHeader: true,
      type: 'html',
      scanStyles: true,
      style: " @media print{@page {size: landscape}} .custom-h3 { color: red; }, .title { color: red; } .tfoot { display: block;  left:0;  position: fixed; bottom: 0;} .page-break	{ display: block; page-break-before: always; }"
    });

    //JSON PRINT
    /*
    print({
      documentTitle: 'PDF',
      printable: this.someJSONdata,
      repeatTableHeader: true,
      type: 'json',
      properties: ['name', 'email', 'phone'],
      header: '<h3 class="custom-h3">My custom header</h3>',
      style: '.custom-h3 { color: red; }'
    });
*/
  }

}
