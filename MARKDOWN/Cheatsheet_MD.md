# **WELCOME TO THE LATEX CHEAT SHEET**

    AUTHOR:         SOUMIL MUKHOPADHYAY  (Github: Soumilgit)
    REFERENCE:      LATEX DOCUMENTATION AND CHEAT SHEETS
    DESCRIPTION:    Your very own LaTeX Cheat Sheet covering basic commands and environments!

**_GO ON FROM HERE, ALL THE BEST_**

<br/>

## DOCUMENT CLASS:

Specifies the type of document (e.g., article, report, book).

    $ \documentclass{article}

<br/>

## PACKAGES:

To include a package in your document.

    $ \usepackage{package_name}

<br/>

## TITLE AND AUTHOR:

To set the title and author of the document.

    $ \title{Your Title}
    $ \author{Your Name}
    $ \date{Date}

To generate the title section in the document.

    $ \maketitle

<br/>

## DOCUMENT STRUCTURE:

Starts the content of the document.

    $ \begin{document}
    $ \end{document}

Creates sections and subsections.

    $ \section{Section Title}
    $ \subsection{Subsection Title}

<br/>

## TEXT FORMATTING:

To make text bold, italic, or underline.

    $ \textbf{Bold Text}
    $ \textit{Italic Text}
    $ \underline{Underlined Text}

<br/>

## LISTS:

To create numbered and bulleted lists.

    $ \begin{enumerate}
        $ \item First item
        $ \item Second item
      $ \end{enumerate}

    $ \begin{itemize}
        $ \item First bullet
        $ \item Second bullet
      $ \end{itemize}

<br/>

## TABLES:

To create a table.

    $ \begin{table}
        $ \begin{tabular}{|c|c|}
          $ \hline
          Column 1 & Column 2 \\
          $ \hline
          Data 1 & Data 2 \\
          $ \hline
        $ \end{tabular}
      $ \end{table}

<br/>

## FIGURES:

To include images in your document.

    $ \begin{figure}
        $ \includegraphics[width=\linewidth]{image_file}
        $ \caption{Caption for the image}
      $ \end{figure}

<br/>

## REFERENCES:

To create a bibliography.

    $ \bibliographystyle{plain}
    $ \bibliography{your_bib_file}

<br/>

## MATH MODE:

To include mathematical expressions.

For inline math:

    $ x^2 + y^2 = z^2 $

For displayed math:

    $ \[ E = mc^2 \] $

<br/>

## GITIGNORE PATTERNS:

To ignore certain files in your LaTeX project.

Create a `.gitignore` file and add patterns like:

    logs/          # ignoring all files inside logs folder
    *.aux          # ignoring all .aux files
    *.log          # ignoring all .log files

<br/>

## GIT BRANCHING:

To create and switch branches in your LaTeX project.

    $ git branch new_branch
    $ git switch new_branch

<br/>

## MERGING BRANCHES:

To merge branches in your LaTeX project.

    $ git merge branch_name

<br/>

## STASHING IN GIT:

To stash changes in your LaTeX project.

    $ git stash
    $ git stash pop

<br/>

## TIME TRAVELLING WITH GIT:

To check out a previous commit.

    $ git checkout commit_id

<br/>

## CREATING GITHUB REPOSITORIES:

1. **BUILD A NEW REPOSITORY AND START WORKING FROM SCRATCH (BY REMOTING)**

    `STEP 1`: CREATE A NEW REPOSITORY ON YOUR GITHUB WEBSITE AND COPY THE URL

    `STEP 2`: CREATES an empty git repository

        $ git init

    `STEP 3`: WRITE YOUR PIECE OF CODE

    `STEP 4`: a commit is needed to push any files to github

        $ git commit -a -m "first commit"

    `STEP 5`: CREATES a new REMOTE DESTINATION for the github repository

        $ git remote add origin <copied url>

    `STEP 6`: LOGS out the REMOTE URL if any

        $ git remote -v

    `STEP 7`: PUSHES the last committed code to github

        $ git push -u origin branchname

2. **BUILD A NEW REPOSITORY AND START WORKING FROM SCRATCH (BY CLONING)**

    `STEP 1`: CREATE A NEW REPOSITORY ON YOUR GITHUB WEBSITE AND COPY THE URL

    `STEP ```markdown
    `STEP 2`: CLONES as well as automatically sets the REMOTE DESTINATION

        $ git clone <copied url>

    `STEP 3`: WRITE YOUR PIECE OF CODE

    `STEP 4`: a commit is needed to push any files to github

        $ git commit -a -m "first commit"

    `STEP 5`: PUSHES the last committed code to github

        $ git push -u origin branchname

3. **CONNECT YOUR PREEXISTING GIT REPOSITORY TO A NEW GITHUB REPOSITORY**

    `STEP 1`: CREATE A NEW REPOSITORY ON YOUR GITHUB WEBSITE AND COPY THE URL

    `STEP 2`: CREATES a new REMOTE DESTINATION for the github repository

        $ git remote add origin <copied url>

    `STEP 3`: LOGS out the REMOTE URL if any

        $ git remote -v

    `STEP 4`: PUSHES the last committed code to github

        $ git push -u origin branchname

<br/>

## THE origin/master THEORY:

*origin/master is called as a REMOTE TRACKING BRANCH, It is a Remote Branch that represents our local Branch*

LOGS the remote tracking branch

    $ git branch -r

to check out the remote branch code: DETACHES HEAD onto the remote tracking HEAD

    $ git checkout origin/master

<br/>

## FETCHING:

_FETCHING allows to get changes from the github remote repository to our local git repository but DOESN'T CHANGE into the working directory_

To RECEIVE the new commits

    $ git fetch

CREATES a new branch having the changes but this doesn't interfere in the working directory

    $ git fetch origin

<br/>

## PULLING = FETCHING + MERGING:

PULLS the changes and merges the changes with the branch you want to OR default

    $ git pull origin

<br/>

## GITHUB COLLABORATION:

`CENTRALIZED WORKFLOW`:

Everybody works on the same main branch and push and pull in the main branch only.

`FEATURE BRANCH WORKFLOW`:

Every feature is pushed upon another independent branch to minimize mess.

`GITHUB PULL REQUEST WORKFLOW`:

Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

<br/>

**_YOU DID IT, SIT BACK AND BE PROUD OF YOURSELF_**