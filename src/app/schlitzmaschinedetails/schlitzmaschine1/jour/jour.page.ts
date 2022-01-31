import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import{EmailComposer}from "@ionic-native/email-composer/ngx";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { ModalController } from '@ionic/angular';
import { File } from '@awesome-cordova-plugins//file/ngx';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-jour',
  templateUrl: './jour.page.html',
  styleUrls: ['./jour.page.scss'],
})

export class JourPage implements OnInit {
  @Input() order;
  public pdfOjb = null ;
  Mitarbeiter = '';
  Datum='';
  Schwamm='';
  ExtrudatFilter='';
  Granulatansaugfiltern='';
  Duse='';
  Maschineneinstellung='';
  Filterdesstaubsaugers='';
  Empfanger='';
currentFile=null;
  constructor(private file : File,private modalContrller: ModalController, private pdfGenerator: PDFGenerator, private route : Router, public emailComposer:EmailComposer,private localNotifications: LocalNotifications) { }
  ngOnInit() {
  }
  backpage(){
    this.route.navigate(['/schlitzmaschinedetails/schlitzmaschine1'])
  }
  simpleNotif(){
    this.localNotifications.schedule({
      id: 1,
      text: 'Heute ist die Tägliche Wartung von Schlitzmaschine1! BITTE überprüfen und bestätigen!',
      trigger: { at: new Date(new Date().getTime() + 10000) },
      data: { secret: 'secret' }
    });
  }
  send() 
  {
    const docDef = {
      pageSize: 'A4' ,
      pageOrientation: 'portrait',
   
      content: [
        {
        text: [
        
        {text: 'Clina', style: 'Header',bold:true,},'- BESSER HEIZEN UND KÜHLEN',
        ],
        style: 'subheader',
        margin: [0, 0, 0, 0]
        
        },
        
        {
        image: 'data:image/png;base64,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',
        width: 80,
        height:80,
        margin: [0, -40, 0, 0],
        alignment:'right'
        
        },
        
        {text: 'www.clina.de', style: 'Header',bold:true,margin: [0, 2, 0, 0],color:"blue",
        alignment:'right'
        },
        
        {text: 'Tägliche Wartung von Schlitzmaschine 1 (SM1)',fontSize: 25,margin: [0, 45, 0, 0], bold: true, Style: 'subheader', alignment: 'center', },
        
        {text: 'Mitarbeiter :',margin: [0, 45, 0, 0], fontSize:18},
                {text: this.Mitarbeiter,margin: [150, -20, 0, 0], fontSize:16,bold:true},
        
        {text: 'Datum :',margin: [0, 45, 0, 0], fontSize:18},
                {text: this.Datum,margin: [150, -20, 0, 0], fontSize:16,bold:true},
               
            {text: 'Maschineneinstellung :',margin: [0, 45, 0, 0], fontSize:18},
                {text: this.Maschineneinstellung,margin: [200, -20, 0, 0], fontSize:16,bold:true},
               
            {text: 'Filter des Staubsaugers :',margin: [0, 45, 0, 0], fontSize:18},
                {text: this.Filterdesstaubsaugers,margin: [200, -20, 0, 0], fontSize:16,bold:true},
               
            {text: 'Fräskopf :',margin: [0, 45, 0, 0], fontSize:18},
                {text: 'kontrolliert',margin: [150, -20, 0, 0], fontSize:16,bold:true},
               
            {text: 'Druckluft :',margin: [0, 45, 0, 0], fontSize:18},
                {text: 'kontrolliert',margin: [150, -20, 0, 0], fontSize:16,bold:true},
           
            {text: 'Tonne vom Staubn :',margin: [0, 45, 0, 0], fontSize:18},
                {text: 'Geleert',margin: [180, -20, 0, 0], fontSize:16,bold:true},],
                styles: {
                header: {
                fontSize: 18,
                bold: true,
                
                margin: [0, 40, 0, 40]
                },
                subheader: {
                fontSize: 18
                },
                
                }
                
                }
                console.log(this.pdfOjb)
      this.pdfOjb = document.getElementById('schlitzmaschine1').innerHTML;
      let options = {
        documentSize: 'A4',
        type: 'share',
        // landscape: 'portrait',
        fileName: (Date() ,'Tägliche-Wartung-SM1.pdf')
      };
      this.pdfGenerator.fromData(this.pdfOjb, options)
        .then((base64) => {
          console.log('OK', base64);
          this.currentFile=base64;
        //  this.saveToDevice(base64,options.fileName)
        }).catch((error) => {
          console.log('error', error);
        });
        this.pdfOjb = pdfMake.createPdf(docDef);
        this.pdfOjb.getBuffer((buffer) => {
          var blob = new Blob([buffer], { type: 'application/pdf' });
  
          // Save the PDF to the data Directory of our App
          this.file.writeFile(this.file.externalDataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
            // Open the PDf with the correct OS tools
          //  this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', //'application/pdf');
          })
        });
    


   let email={
  to: this.Empfanger,
  attachments :[this.file.externalDataDirectory+'myletter.pdf'],
  subject: 'Tägliche Wartung Schlitzmaschine1',
  body: 'Anmerkungen:',
  isHtml: true,
  app: "Gmail"
}
this.emailComposer.open(email);
  }


  saveToDevice(data:any,savefile:any){
    let self = this;
    self.file.writeFile(self.file.externalDataDirectory, savefile, data, {replace:false});
    ;
    }
}
