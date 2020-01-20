#!/usr/local/bin/node
'use strict'
const fs = require('fs')

const books = require('../Books.json');

const bookChapterCount = [];
for (let index = 0; index < books.length; index++) {
  const bookName = books[index];
  const bookFileName = `${bookName.replace(/[\ \]&]+/g, '')}.json`;
  const bookJSON = fs.readFileSync(bookFileName);
  const book = JSON.parse(bookJSON);
  bookChapterCount.push({
    name: bookName,
    fileName: bookFileName,
    chapterCount: book.chapters.length
  });
}

const tocFilePath = 'ToC.json';
fs.writeFileSync(tocFilePath, JSON.stringify(bookChapterCount, null, ' '));
console.log(`Table of contents written to file ${tocFilePath}`);