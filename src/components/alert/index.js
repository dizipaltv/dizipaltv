const{Notification:Notification,app:app}=require("electron");class Alert{static show_notification(t={}){try{const o={title:t.title||app.getName(),body:t.body||"Some Message"};new Notification(o).show(),console.log("✓ Alert.show_notification \t\t\t—▶ New Notification has been created successfully!")}catch(t){console.error("✕ Alert.show_notification \t\t\t—▶ Ups! Something went wrong!\n",t)}}}module.exports=Alert;