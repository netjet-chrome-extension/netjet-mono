package sourcegraph_test

import (
"fmt"
"sourcegraph.com/sourcegraph/go-selenium"
	"testing"
)

// cached

func TestExample(t *testing.T) {

	var wd selenium.WebDriver
	var err error
	caps := selenium.Capabilities(map[string]interface{}{"browserName": "firefox"})
	if wd, err = selenium.NewRemote(caps, "http://localhost:4444/wd/hub"); err != nil {
		fmt.Printf("Failed to open session: %s\n", err)
		return
	}
	defer wd.Quit()

	err = wd.Get("https://sourcegraph.com/sourcegraph/go-selenium")
	if err != nil {
		fmt.Printf("Failed to load page: %s\n", err)
		return
	}

	if title, err := wd.Title(); err == nil {
		fmt.Printf("Page title: %s\n", title)
	} else {
		fmt.Printf("Failed to get page title: %s", err)
		return
	}

	var elem selenium.WebElement
	elem, err = wd.FindElement(selenium.ByCSSSelector, ".repo .name")
	if err != nil {
		fmt.Printf("Failed to find element: %s\n", err)
		return
	}

	if text, err := elem.Text(); err == nil {
		fmt.Printf("Repository: %s\n", text)
	} else {
		fmt.Printf("Failed to get text of element: %s\n", err)
		return
	}

	// output:
	// Page title: go-selenium - Sourcegraph
	// Repository: go-selenium
}