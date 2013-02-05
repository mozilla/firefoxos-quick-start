
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    // var $ = require('zepto');

    // Need to verify receipts? This library is included by default.
    // https://github.com/mozilla/receiptverifier
    // require('receiptverifier');

    // Want to install the app locally? This library hooks up the
    // installation button. See <button class="install-btn"> in
    // index.html
    require('./install-button');

    // Write your app here.

    // Create the battery indicator listeners
    (function() {
      var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery,
          indicator, indicatorPercentage;

      if(battery) {
        indicator = document.getElementById('indicator'),
        indicatorPercentage = document.getElementById('indicator-percentage');

        // Set listeners for changes
        battery.addEventListener('chargingchange', updateBattery);
        battery.addEventListener('levelchange', updateBattery);

        // Update immediately
        updateBattery();
      }

      function updateBattery() {
        // Update percentage width and text
        var level = (battery.level * 100) + '%';
        indicatorPercentage.style.width = level;
        indicatorPercentage.innerHTML = 'Battery: ' + level;
        // Update charging status
        indicator.className = battery.charging ? 'charging' : '';
      }
    })();


    // Create the list functionality
    (function() {
        var form = document.getElementById('item-form'),
            itemInput = document.getElementById('item'),
            itemList = document.getElementById('item-list'),
            itemContainer = document.getElementById('items'),
            hasLocalStorage = 'localStorage' in window,
            template = '<li data-value="{item}">{item} <a href="" class="delete">Delete</a></li>',
            items = load(),
            phoneNumber = '8675309';

        // Do initial list items loading
        items.forEach(function(value) {
            addItem(value);
        });

        // Add a new item upon form submission
        form.addEventListener('submit', function(e) {
          e.preventDefault();

          if(itemInput.value) {
            items.push(itemInput.value);
            save();
            addItem(itemInput.value);

            // Use the vibrate API to acknowledge the item was added
            if('vibrate' in navigator) {
                navigator.vibrate(200);
            }

            //  As an example of using priviledged WebAPIs, 
            //  we'll use the systemXHR API to send the new item value
            //  to a (fake) social site.  systemXHR is used more for 
            //  packaged apps since hosted apps can proxy, but 
            //  is presented here for those looking to build
            //  a hosted app instead.
            try {
                var xhr = new XMLHttpRequest({
                    mozSystem: true // use systemXHR
                });
                xhr.addEventListener('load', function(e) {
                    // All good, posted to social site!
                });
                xhr.open('POST', 'http://areatweet.com', true);
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhr.send('item=' + itemInput.value);
            }
            catch(e){
                console.log('XHR Error!  systemXHR not implemented or no permissions');
            }
            
            

            form.reset();
          }

          return false;
        });

        // Detect item deletion by event delegation
        itemList.addEventListener('click', function(e) {
          e.preventDefault();

          if(e.target.className == 'delete') {
            deleteItem(e.target.parentNode.getAttribute('data-value'));
            itemList.removeChild(e.target.parentNode);
            if(items.length == 0) {
              itemContainer.classList.remove('has-items');
            }
            save();
          }
        });

        // Adds an item into the list
        function addItem(value) {
            itemList.innerHTML += template.replace(/\{item\}/g, value);
            itemContainer.classList.add('has-items');
        }

        // Saves items to localStorage
        function save() {
            if(hasLocalStorage) {
                localStorage.setItem('items', JSON.stringify(items));
            }
        }

        // Removes an item from localStorage
        function deleteItem(value) {
            var index = items.indexOf(value);
            if(index != -1) {
                items.splice(index, 1);
            }
        }

        // Loads items from localStorage
        function load() {
            var items;
            if(hasLocalStorage) {
                try {
                    items = JSON.parse(localStorage.getItem('items'));
                }
                catch(e) {}
            }
            return items || [];
        }

      })();
});