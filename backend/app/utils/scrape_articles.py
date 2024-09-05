def scrape_articles():
    from bs4 import BeautifulSoup
    import requests as req
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        
    }

    response = req.get("https://www.ecowatch.com/climate-change",headers=headers)
        

    document = BeautifulSoup(response.text,"html.parser")
    print(response.text)

    section = document.find(class_ = "archive-category-posts",tag="section")
    articles = section.find_all(class_="home-category-posts__list-item")

    for article in articles:
        link = article.find("a")["href"]
        response = req.get(link)
        document = BeautifulSoup(response.text,"html.parser")
        article = document.article
        content = article.find(class_= 'article__content')
        content = content.find_all("p")
        

        article_content = ''
        for section in content:
            article_content += section.text
        print(article_content)
        
            



scrape_articles()
        
