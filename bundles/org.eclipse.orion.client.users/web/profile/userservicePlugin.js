/*******************************************************************************
 * @license
 * Copyright (c) 2012 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/
/*global define confirm eclipse*/
define(["orion/plugin", "profile/UsersService", "domReady!"], function(PluginProvider, UsersService) {
	var usersService = new UsersService();
	var provider = new PluginProvider();

	usersService.info = function () {
		return {
			name: "User profile"
		};
	};


	usersService.getDivContent = function () {
		var content = {
			"actions": [{
				"id": "saveProfileButton",
				"name": "Save Profile",
				"tooltip": "Save Profile",
				"action": "saveProfile"
			}, {
				"id": "resetProfileButton",
				"name": "Reset",
				"tooltip": "Reset Profile Information",
				"action": "resetProfile"
			}, {
				"id": "deleteProfileButton",
				"name": "Delete Profile",
				"tooltip": "Delete Profile",
				"action": "deleteProfile"
			}],
			"sections" : [
                            {"id": "personalInformation", "name" : "Personal Information", "data" :[
                                                                                                    {"type": "TextBox", "props": {"id": "pi_login", "readOnly" : false, "name" : "login"}, "label": "Login"},
                                                                                                    {"type": "TextBox", "props": {"id": "pi_name", "readOnly" : false,  "type" : "", "name" : "Name"}, "label" : "Name"},
                                                                                                  	 {"type": "TextBox", "props": {"id": "pi_email", "readOnly" : false,  "type" : "", "name" : "email"}, "label" : "Email"},
                                                                                                  	 {"type": "CheckBox", "props": {"id": "pi_emailConfirmed", "readOnly" : true,  "type" : "", "name" : "emailConfirmed"}, "label" : "Email confirmed"},
                                                                                                    {"type": "eclipse.DateLong", "props": {"id": "pi_lastLogin", "readOnly" : true,  "type" : "", "name" : "LastLogInTimestamp"}, "label" : "Last login"}
                                                                                                    ]
                            },
                            {"id": "gitInformation", "name" : "Git (Defaults used to configure clones)", "data" : [
   				  	                                                                                            {"type": "TextBox", "props": {"id": "git_mail", "readOnly" : false, "name" : "GitMail"}, "label" : "Git Mail"},
   				  	                                                                                            {"type": "TextBox", "props": {"id": "git_name", "readOnly" : false, "name" : "GitName"}, "label" : "Git Name"}
   				  	                                                                                            ]
   				  	        },
                          {"id": "openids", "name": "Manage External Accounts", "type": "iframe", "data" : {"src": "../mixloginstatic/manageOpenids.html", "style" : "border: 0px; width: 500px"}}
                            ]
		};

		return content;
	};

	usersService.initProfile = function (userURI, pluginsEventName, dataEventName) {
		return this.getUserInfo(userURI, function (json) {
			usersService.dispatchEvent({
				type: pluginsEventName,
				"data": json
			});
			
			usersService.dispatchEvent({type: dataEventName, data: json});
		});
	};

	usersService.fire = function (action, url, jsonData) {
		switch (action) {
		case "saveProfile":
			return this.updateUserInfo(url, jsonData, function (url, jsonResp) {
				this.initProfile(url, "requiredPluginsChanged", "userInfoChanged");
				return (jsonResp && jsonResp.Message) ? jsonResp : {
					Message: "Profile saved!",
					status: 200
				};
			}.bind(this, url));
			break;
		case "resetProfile":
			return this.getUserInfo(url, "userInfoChanged");
			break;
		case "deleteProfile":
			var login = jsonData.login ? jsonData.login : url;
			if (confirm("Do you really want to delete user " + login + "?")) {
				return this.deleteUser(url, "userDeleted");
			}
			break;
		default:
			return this.updateUserInfo(url, jsonData, function (url, jsonResp) {
				this.initProfile(url, "requiredPluginsChanged", "userInfoChanged");
				return (jsonResp && jsonResp.Message) ? jsonResp : {
					Message: "Profile saved!",
					status: 200
				};
			}.bind(this, url));
			break;
		}
	};


	provider.registerService("orion.core.user", usersService);
	provider.connect();
});