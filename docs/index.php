<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Design</title>
	<link rel="stylesheet" href="public/app.css">
</head>
<body>
	<div id="root" class="section">
		<div class="columns">
			<pre class="column">{{ pageTemplate | pretty }}</pre>
			<div class="column is-8">
				<template-builder :sections="pageTemplate"></template-builder>
			</div>
		</div>
	</div>

	<script src="public/app.js"></script>
</body>
</html>