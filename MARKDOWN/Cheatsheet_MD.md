![ClipWindowsGIF](https://github.com/user-attachments/assets/4403fd09-5357-4f6a-9876-4780820a79d5)# LaTeX CheatSheet

## DOCUMENT CLASS

Specifies the type of document (e.g., article, report, book).

```
\documentclass{class}
```
Sets options like font size and paper type.

```
\documentclass[11pt,a4paper]{article}
```
PACKAGES
Includes a package for full page margins.

```
\usepackage{fullpage}\
```
Includes a package for setting custom margins.

```
\usepackage{anysize}
```
Includes a package for multiple columns.

```
\usepackage{multicol}
```
Includes a package for LaTeX symbol font.

```
\usepackage{latexsym}
```
Includes a package for graphics.

```
\usepackage{graphicx}
```
Includes a package for URLs.

```
\usepackage{url}
```
TITLE AND AUTHOR
Sets the title of the document.

```
\title{text}
```
Sets the author of the document.

```
\author{text}
```
Sets the date of the document.

```
\date{text}
```
Generates the title section in the document.

```
\maketitle
```

DOCUMENT STRUCTURE
Starts the content of the document.

```
\begin{document}
```
Ends the content of the document.

```
\end{document}
```
Creates a part in the document.

```
\part{title}
```
Creates a chapter in the document.

```
\chapter{title}
```
Creates a section in the document.

```
\section{title}
```
Creates a subsection in the document.

```
\subsection{title}
```
Creates a subsubsection in the document.

```
\subsubsection{title}
```
Creates a paragraph in the document.

```
\paragraph{title}
```
Creates a subparagraph in the document.

```
\subparagraph{title}
```
TEXT FORMATTING
Makes text bold.

```
\textbf{text}
```
Makes text italic.

```
\textit{text}
```
Underlines text.
```
\underline{text}
```
Emphasizes text.

```
\emph{text}
```
Sets text in Roman family.

```
\textrm{text}
```
Sets text in Sans serif family.

```
\textsf{text}
```
Sets text in Typewriter family.

```
\texttt{text}
```
LISTS
Creates a numbered list.

```
\begin{enumerate} ... \end{enumerate}
```
Creates a bulleted list.

```
\begin{itemize} ... \end{itemize}
```
Creates a description list.

```
\begin{description} ... \end{description}
```
TABLES AND FIGURES
Creates a table environment.

```
\begin{table}[placement] ... \end{table}
```
Creates a figure environment.

```
\begin{figure}[placement] ... \end{figure}
```
Inserts an image.

```
\includegraphics[width=x]{file}
```
Adds a caption to a table or figure.

```
\caption{text}
```
REFERENCES
Creates a label for referencing.

```
\label{marker}
```
References a labeled item.

```
\ref{marker}
```
Gives the page number of a labeled item.

```
\pageref{marker}
```
Creates a footnote.

```
\footnote{text}
```
BIBLIOGRAPHY
Specifies the bibliography style.

```
\bibliographystyle{plain}
```
Includes the bibliography file.

```
\bibliography{bibfile}
```
MISCELLANEOUS
Creates a table of contents.

```
\tableofcontents
```
Sets the page style to empty (no headers or footers).

```
\pagestyle{empty}
```
Changes line spacing.
```
\linespread{x}
```
Inserts a comment (not printed).

```
\begin{comment} ... \end{comment}
```
MATH MODE
For inline math, use this syntax.

```
$ ... $
```
For displayed math, use this syntax.

```
\[ ... \]
```


Superscript notation.

```
x^{y}
```
Subscript notation.

```
x_{y}
```
Fraction notation.
```
\frac{x}{y}
```

Thank you😊!

