README.txt
==========

This simple module provides tokens for Canonical URL([current-page:url:with-current-page-number]), Previous page URL([current-page:url:with-previous-page-number]) and Next page URL([current-page:url:with-next-page-number]) in accordance with
 https://support.google.com/webmasters/answer/1663744. It will work only with ?page parameter that has integer value, it means if you use views then Pager ID should be equal 0 (by default), metatags will look like:
 
<link rel="canonical" href="http://www.example.com/article?story=abc&page=2"/>
<link rel="prev" href="http://www.example.com/article?story=abc&page=1" />
<link rel="next" href="http://www.example.com/article?story=abc&page=3" />

Tokens can be added from metatags configuration page in ADVANCED TAGS section.
