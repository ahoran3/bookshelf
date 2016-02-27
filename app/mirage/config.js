export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  this.get('/books', function() {
    return {
      data: [
        {
          type: 'books',
          id: 1,
          attributes: {
            title: 'The Associate',
            author: 'John Grisham',
            starred: false,
            image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQBbSGOm3qJoyyZ5ee3Wge2i-rz88kTU-Mt15gwZD0fHnHxmdvG'
          }
        },
        {
          type: 'books',
          id: 2,
          attributes: {
            title: 'Inferno',
            author: 'Dan Brown',
            starred: false,
            image: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Inferno-cover.jpg'
          }
        },
        {
          type: 'books',
          id: 3,
          attributes: {
            title: 'Digital Fortress',
            author: 'Dan Brown',
            starred: true,
            image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRvTjoa0PWBYL7Szf4AbFU02HnKFZaQtCyoLV-LzkPfuIvNR6ov'
          }
        },
        {
          type: 'books',
          id: 4,
          attributes: {
            title: 'Odd Thomas',
            author: 'Dean Koontz',
            starred: false,
            image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSdvs2BlUQHwIPB0ZLdsR-0lUm5on8C6_Ug2Zdb34wYvwB3pWUl'
          }
        },
        {
          type: 'books',
          id: 5,
          attributes: {
            title: 'Harry Potter and the Sorcer\'s Stone',
            author: 'J.K. Rowling',
            starred: true,
            image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcS01hSr0VxYgkWg9ydnuMwA92Xcd-sMxaXs0Ae7x3t9CWrshtrp'
          }
        },
        {
          type: 'books',
          id: 6,
          attributes: {
            title: 'Pirate',
            author: 'Ted Bell',
            starred: false,
            image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRk4pz5XFkgcE2dJrs5dWDoh6GAA4TrHcUzx_eZpTTYwwKYshW0'
          }
        },
        {
          type: 'books',
          id: 7,
          attributes: {
            title: 'Rising Sun',
            author: 'Michael Crichton',
            starred: false,
            image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQBPI1ealbOLhTxLF2KjKiJ7SaZPAZz9bKYmN2N9ZpLEGvyof6s'
          }
        },
        {
          type: 'books',
          id: 8,
          attributes: {
            title: 'Next',
            author: 'Michael Crichton',
            starred: true,
            image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRZiKQDCUyJEZBykV2s85uzZ8h1NMIQrLm1BkKnPvWH7XlLtrh0'
          }
        },
        {
          type: 'books',
          id: 9,
          attributes: {
            title: 'Prey',
            author: 'Michael Crichton',
            starred: true,
            image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSTLA6--6bCLxXRC4JKTu1WmYifpu-2-5EAfmt-5EGlkSL1jsLr'
          }
        },
        {
          type: 'books',
          id: 10,
          attributes: {
            title: 'Deception Point',
            author: 'Dan Brown',
            starred: true,
            image: 'http://d28hgpri8am2if.cloudfront.net/book_images/cvr9780743490306_9780743490306_hr.jpg'
          }
        },
        {
          type: 'books',
          id: 11,
          attributes: {
            title: 'Lexicon',
            author: 'Max Barry',
            starred: true,
            image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTXyxWqzYiXus028Ev3kSCV02R0zkoED3vhouQ0Gs3QlqNyfa3h'
          }
        },
        {
          type: 'books',
          id: 12,
          attributes: {
            title: 'Outliers',
            author: 'Malcolm Gladwell',
            starred: true,
            image: 'http://content.growth5.com/uploaded_images/outliers-742141.jpg'
          }
        },
        {
          type: 'books',
          id: 13,
          attributes: {
            title: '1984',
            author: 'George Orwell',
            starred: true,
            image: 'http://erinreads.com/wp-content/uploads/2012/01/1984.jpg'
          }
        },
        {
          type: 'books',
          id: 14,
          attributes: {
            title: 'Angels and Demons',
            author: 'Dan Brown',
            starred: true,
            image: 'http://www.danbrown.com/wp-content/themes/danbrown/images/db/books.03.jpg'
          }
        },
        {
          type: 'books',
          id: 15,
          attributes: {
            title: 'The Fellowship of the Ring',
            author: 'J.R.R. Tolken',
            starred: false,
            image: 'http://d.gr-assets.com/books/1298411339l/34.jpg'
          }
        }
      ]
    };
  });

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
