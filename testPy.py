from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import chromedriver_autoinstaller
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
import json


chromedriver_autoinstaller.install()
def getobject(url="https://www.adidas.com/us/4cmte-track-top/HM6235.html"):
    try:
        driver = webdriver.Chrome()
        driver.get(url)
        WebDriverWait(driver,4)
        name = driver.find_element(By.XPATH, '//*[@id="main-content"]/div/div[1]/h1/span')
        name = name.get_attribute('innerHTML')
        price = driver.find_element(By.XPATH, '//*[@id="main-content"]/div/div[1]/div[2]/div/div/div/div')
        price = price.get_attribute('innerHTML')
        sizes_elements = driver.find_elements(By.XPATH, '//*[@id="main-content"]/div[2]/div[2]/section/div[1]/div[2]/button/span[1]')
        sizes = []
        for e in sizes_elements:
            sizes.append(e.get_attribute('innerHTML'))
        colors_elements = driver.find_elements(By.XPATH, '//*[@id="navigation-target-gallery"]/div/div/div/nav/div[3]/a')
        colors = []
        for e in colors_elements:
            colors.append({ "url": e.get_attribute('href'),
                           "img" : e.find_element(By.CSS_SELECTOR,'*').get_attribute('src'),
                           "alt" : e.find_element(By.CSS_SELECTOR,'*').get_attribute('alt') })
        description1 = driver.find_element(By.XPATH, '//*[@id="navigation-target-description"]/div/div/div/div[1]/h3')
        description2 = driver.find_element(By.XPATH, '//*[@id="navigation-target-description"]/div/div/div/div[1]/p')
        description = description1.get_attribute('innerHTML') + description2.get_attribute('innerHTML')
        imgs = driver.find_elements(By.XPATH, '//*[@id="navigation-target-gallery"]/section/div[1]/div/div[1]/div/div/img')
        img_urls = []
        for e in imgs:
            img_urls.append(e.get_attribute('src'))
        item = {
            "name" : name,
            "sizes" : sizes,
            "colors" : colors,
            "description" : description,
            "imgs" : img_urls,
            "price" : price
        }
        driver.close()
        return item
    except Exception:
        pass
# urls = []
# for elem in elems:
#     urls.append((elem).get_attribute('href'))
# print(urls)
jsonfile = []
with open("url.json","r") as outfile:
    for line in outfile:
        jsonfile.append(getobject(line))
with open("data.json","w") as outfile:
    outfile.write(json.dumps(jsonfile))