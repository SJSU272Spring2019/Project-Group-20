# Project-Group-20

Finding the Most Relevant Answer from Discussion Forum using NLP

Divjot Dhody, Ajith Balaji Nagarajan, Pooja Ramaswamy, Khang Doan

StackOverflow, a website that is ubiquitous in the engineering field for both academia and professional settings. StackOverflow remains one of the most used websites when it comes to finding and obtaining solutions to technical problems. Any users on that website has experience with trying to find the most appropriate answer from a long list of comments. This process involves manually looking for keywords, checking the number of up-votes each answer has, and trying out solution that may not be right.

The proposed solution is a system that takes in users’ query and matching it up with the most appropriate answer.

The core of this application is the backend python code that does the actual work. There are several factors to determine on what would make an answer the most relevant for a particular question from amongst the pool of other answers. These include: the number of non-stop words, the number of repetitive words present in the answer, the answer upvotes, the answer downvotes, the reliability of the user who wrote the answer, the number of unique words present in the answer, the reputation of the answer, the count of comments written for the answer, the relevancy between answer body, the question body and the question tags and the information provided by the answers. In this model, all these factors are obtained for all the answers for a particular question and that is used to predict the most relevant answer for that particular question.

To run :

clone the repository.
open it in VS 2019 or Atom.
Run the predictor.py function
Run the react app
Use localhost:3000 in the web browser to run the application
