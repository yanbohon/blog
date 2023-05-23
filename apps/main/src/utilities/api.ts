type Parameters = {
	sticky?: boolean
	cate?: string
	cateExclude?: string
	perPage?: number
	getCate?: boolean
	mark?: number
	page?: number
	visit?: boolean
	post?: number
	search?: string
	sponsor?: boolean
	subs?: boolean
	count?: boolean
	postIDs?: boolean
	searchIndexes?: boolean
	rssData?: boolean
}

const getApi = (props: Parameters) => {
	if (props.getCate) {
		return `https://yanbohon.com/wp-json/wp/v2/categories/${props.cate}`
	}

	if (props.mark) {
		return `https://yanbohon.com/wp-json/tony/v1/mark/${props.mark}`
	}

	if (props.postIDs) {
		return "https://yanbohon.com/wp-json/tony/v1/posts_ids"
	}

	if (props.searchIndexes) {
		return "https://yanbohon.com/wp-json/tony/v1/searchIndexes"
	}

	if (props.rssData) {
		return "https://yanbohon.com/wp-json/tony/v1/rssData"
	}

	if (props.page) {
		return `https://yanbohon.com/wp-json/wp/v2/pages/${props.page}`
	}

	if (props.post) {
		return `https://yanbohon.com/wp-json/wp/v2/posts/${props.post}`
	}

	if (props.visit) {
		return "https://yanbohon.com/wp-json/tony/v1/visit"
	}

	if (props.sponsor) {
		return "https://yanbohon.com/wp-content/themes/peg/com/data/donors.php"
	}

	if (props.subs) {
		return "https://api.buttondown.email/v1/subscribers"
	}

	if (props.count) {
		return "https://yanbohon.com/wp-json/tony/v1/poststats"
	}

	const s = props.sticky
		? "sticky=1"
		: props.sticky === undefined
		? ""
		: "sticky=0"
	const ce = props.cateExclude ? `&categories_exclude=${props.cateExclude}` : ""
	const c = props.cate ? `&categories=${props.cate}` : ""
	const p = props.perPage !== undefined ? `&per_page=${props.perPage}` : ""
	const sc = props.search ? `&search=${props.search}` : ""

	return `https://yan'bo'hon/wp-json/wp/v2/posts?${s}${p}${c}${ce}${sc}`
}

export default getApi
