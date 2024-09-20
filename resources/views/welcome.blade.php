<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel Mapa</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <div id="map-root"></div>

    <!-- Incluindo o script TypeScript ou JavaScript -->
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
