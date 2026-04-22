<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
<title inertia>{{ config('app.name') }}</title>

<meta name="description" content="Default company description here" />
<link rel="canonical" href="{{ url()->current() }}" />

<!-- Open Graph -->
<meta property="og:title" content="{{ config('app.name') }}" />
<meta property="og:description" content="Default company description here" />
<meta property="og:url" content="{{ url()->current() }}" />
<meta property="og:type" content="website" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <link rel="icon" href='/images/logo.png'/>

        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Jost:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&family=Questrial&family=Roboto:ital,wght@0,100..900;1,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

<nav class="sr-only" aria-label="Site navigation index">
    <!-- Main Pages -->
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/automobile">Automobile</a>
    <a href="/realestate">Real Estate</a>
    <a href="/hospitality">Hospitality</a>
    <a href="/banking">Banking</a>
    <a href="/agriculture">Agriculture</a>
    <a href="/engineering">Engineering</a>
    <a href="/community">Community</a>
    <a href="/contact">Contact</a>
    <a href="/organization-history">Organization History</a>
    <a href="/message-from-chairman">Message From Chairman</a>
    <a href="/corporate-profile">Corporate Profile</a>
    <a href="/company-profile">Company Profile</a>
    <a href="/blog">Blog</a>
    <a href="/career">Career</a>
</nav>




    </body>
</html>
