var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Contact } from './contact';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.contact = new Contact();
        this.tableMode = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadcontacts();
    };
    AppComponent.prototype.loadcontacts = function () {
        var _this = this;
        this.dataService.getContacts()
            .subscribe(function (data) { return _this.contacts = data; });
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        if (this.contact.id == null) {
            this.dataService.createContact(this.contact)
                .subscribe(function (data) { return _this.contacts.push(data); });
        }
        else {
            this.dataService.updateContact(this.contact)
                .subscribe(function (data) { return _this.loadcontacts(); });
        }
        this.cancel();
    };
    AppComponent.prototype.editcontact = function (p) {
        this.contact = p;
    };
    AppComponent.prototype.cancel = function () {
        this.contact = new Contact();
        this.tableMode = true;
    };
    AppComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteContact(p.id)
            .subscribe(function (data) { return _this.loadcontacts(); });
    };
    AppComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map