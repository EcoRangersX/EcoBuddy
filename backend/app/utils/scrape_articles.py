

def scrape_articles():
    from bs4 import BeautifulSoup
    import requests
    
    domain_prefix = "https://www.the-scientist.com"
    response = requests.get(
        url=f"{domain_prefix}/tag/ecology"
    )
    document = BeautifulSoup(response.text, "html.parser")
    articles = document.main.main.find_all(class_="ArticleSummary")
    articles_to_return = []

    for articlesummary in articles:
        header = articlesummary.find("header")

        link =  domain_prefix + header.find("a")["href"]
        title = header.find("div").text
        img = articlesummary.find("img")["src"]
        articles_to_return.append([link, title, img])
        

    return articles_to_return
    