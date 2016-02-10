
-------------------HARAKA SNIFFER ---------------------------

Steps To Setup the sniffer: 

1. Clone this repo
2. Run  " npm install"
3. Install "node-inspector"
4. Install Swaks for mail sending.
5. Setup a local mailserver (On Probably 1025 port, as is configured , however u can change it in smtp_forward.ini file)
        For mailserver locally , u can user "mailcatcher" , ruby based local mailserver
6. Now run "node --debug haraka.js"
7. Open node inspector url in browser (mostly it would be http://127.0.0.1:8080/?port=5858 ).
8. Send the mail through swaks to configured domains . (default it is : gmail.com or directi.com)
9. The plugin hook will stop at the point where the data is to be queued.



Default settings : haraka server runs at 1234 , mailserver runs at 1025, some plugins for header checks n hostlists have been enabled by default. 
