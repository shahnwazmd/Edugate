import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    publisheDate: String,
    thumbnailUrl: String,
    pageCount: String,
    isbn: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;