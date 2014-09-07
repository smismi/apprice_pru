
$(document).ready(function(){



	var Book = Backbone.Model.extend({
		defaults: {
			ID: null,
			BookName: null
		}
	});

	var book = new Book({BookName: "Backbone Book 1"});



	var BooksCollection = Backbone.Collection.extend({
		model: Book
	});


	var books = new BooksCollection();


	var BookView = Backbone.Marionette.ItemView.extend({
		tagName: 'tr',
		template: "#bookView",

		initialize: function() {
			this.listenTo(this.model, "change", this.render);
		},

		events: {
			'click #btnDeleteBook': "deleteBook",
			'click #btnEditBook': "editBook"
		},

		deleteBook: function() {
			// do something to delete this book
		},

		editBook: function() {
			// do something to edit this book
		}
	});



// Lets create a book
	var book = new Book ({BookName: "Test Book"});

// Lets create the view and pass the book as model
	var bookView = new BookView({model: book});


	var BooksCollectionView = Backbone.Marionette.CollectionView.extend({
		childView: BookView,
		tagName: 'table',
	});


// Create a collection of books
	var books = new BooksCollection();

// Do something to fetch or fill this collection

// create the collection view to render
	var booksView = new BooksCollectionView({ collection: books });




	var AddBookView = Backbone.Marionette.ItemView.extend({
		template: "#addBookView",
		events: {
			'click #btnAddBook': "addBook"
		},

		addBook: function () {
			// Handle the book addition here
		}
	});


	var BooksController = Backbone.Marionette.Controller.extend({
		initialize: function (options) {
			var self = this;

			// Hook up the add book event
			sampleApp.on("bookAdd", function (book) {
				self.AddBook(book);
			});

			// Hook up the delete book event
			sampleApp.on("bookDelete", function (book) {
				self.DeleteBook(book);
			});

			// Hook up the edit book event
			sampleApp.on("bookEdit", function (book) {
				self.UpdateBook(book);
			});
		},

		ShowBooksList: function (options) {
			this.collection = new BooksCollection([
				{
					ID: 1,
					BookName: '212'
				},{
					ID: 2,
					BookName: '1212'
				},{
					ID: 3,
					BookName: '2312'
				},{
					ID: 4,
					BookName: 'dd212'
				},{
					ID: 5,
					BookName: 'fgg212'
				},
			]);
			var self = this;
			var booksView = new BooksCollectionView({ collection: self.collection });

			options.region.show(booksView);

		},

		ShowAddBookView: function (options) {
			var addBookView = new AddBookView();

			options.region.show(addBookView);
		},

		AddBook: function (book) {
			var BookToSave = book;
			var self = this;

			BookToSave.save({}, {
				success: function (model, respose, options) {
					console.log("The model has been saved to the server");
					self.collection.push(model);
				},
				error: function (model, xhr, options) {
					console.log("Something went wrong while saving the model");
				}
			});
		},

		DeleteBook: function (book) {
			var BookToDelete = book;
			var self = this;

			BookToDelete.id = BookToDelete.get("ID");
			BookToDelete.destroy({
				success: function (model, respose, options) {
					console.log("The model has deleted the server");
					self.collection.remove(model);
				},
				error: function (model, xhr, options) {
					console.log("Something went wrong while deleting the model");
				}
			});
		},

		UpdateBook: function (book) {
			var BookToUpdate = book;
			var self = this;

			BookToUpdate.id = BookToUpdate.get("ID");
			BookToUpdate.save({}, {
				success: function (model, respose, options) {
					console.log("The model has been updated to the server");
					self.collection.push(model, { merge: true });
				},
				error: function (model, xhr, options) {
					console.log("Something went wrong while updating the model");
				}
			});
		}
	});


	var sampleApp = new Backbone.Marionette.Application();



	sampleApp.addRegions({
		listRegion: "#listRegion",
		addRegion: "#addRegion"
	});



// Lets show the list of books
	var booksController = new BooksController();
	booksController.ShowBooksList({ region: sampleApp.listRegion });

// Lets show the region to add the books
	booksController.ShowAddBookView({ region: sampleApp.addRegion });


})
