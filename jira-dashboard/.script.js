const createIssueButton = document.querySelector(".create-button");

const textArea = document.querySelector(".issue-input");

const onClickCreateIssue = () => {
  createIssueButton.classList.add("hide");
  textArea.classList.remove("hide");
  textArea.focus();
};

createIssueButton.addEventListener("click", onClickCreateIssue);
